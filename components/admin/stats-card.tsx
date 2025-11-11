export default function StatsCard({ title, value, icon, trend }: any) {
  return (
    <div className="card-base p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          <p className="text-xs text-muted-foreground mt-3">{trend}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  )
}
