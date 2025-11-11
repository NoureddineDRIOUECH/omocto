"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"

export default function ImageUploadField({ name, value, onChange }: { name: string; value?: string | File; onChange: (file: File | null) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(typeof value === 'string' ? value : null)

  useEffect(() => {
    if (value instanceof File) {
      const objectUrl = URL.createObjectURL(value)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    } else if (typeof value === 'string') {
      setPreview(value)
    } else {
      setPreview(null)
    }
  }, [value])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onChange(file)
  }

  const handleRemove = () => {
    onChange(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-3">
      {preview && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-secondary/50">
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-2 rounded-lg bg-destructive text-destructive-foreground hover:opacity-90"
          >
            ✕
          </button>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-3 rounded-lg border-2 border-dashed border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground"
      >
        📸 Click to upload image or drag and drop
      </button>
    </div>
  )
}
