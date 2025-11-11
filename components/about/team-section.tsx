'use client';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const teamMembers = [
  {
    id: 1,
    name: 'Ouidade Melhaf',
    designation: 'Managing Director',
    image: '/placeholder-user.jpg',
  },
  {
    id: 2,
    name: 'Wiame Hakim',
    designation: 'Legal Advisor',
    image: '/placeholder-user.jpg',
  },
];

const TeamSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8 text-gold-gradient">Meet Our Team</h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={teamMembers} />
      </div>
    </div>
  );
};

export default TeamSection;