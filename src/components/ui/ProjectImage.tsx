interface ProjectImageProps {
  title: string;
  className?: string;
  index?: number;
}

// Generate a unique gradient based on project index
const gradients = [
  "from-purple-600/20 via-blue-600/20 to-cyan-600/20",
  "from-pink-600/20 via-purple-600/20 to-indigo-600/20",
  "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
  "from-orange-600/20 via-rose-600/20 to-pink-600/20",
];

export default function ProjectImage({
  title,
  className = "",
  index = 0,
}: ProjectImageProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={`relative w-full h-48 rounded-xl overflow-hidden bg-dark-bg border border-dark-border group-hover:border-primary/30 transition-all duration-300 ${className}`}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Browser Mockup */}
      <div className="absolute inset-0 p-4">
        {/* Browser Chrome */}
        <div className="bg-dark-card rounded-t-lg border border-dark-border p-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 bg-dark-bg rounded px-3 py-1 text-xs text-text-muted truncate">
              {title.toLowerCase().replace(/\s+/g, "-")}.vercel.app
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="bg-dark-bg/80 border-x border-b border-dark-border rounded-b-lg p-4 h-[calc(100%-44px)]">
          {/* Skeleton UI */}
          <div className="space-y-3">
            <div className="h-4 bg-primary/10 rounded w-3/4" />
            <div className="h-3 bg-dark-border rounded w-full" />
            <div className="h-3 bg-dark-border rounded w-5/6" />
            <div className="flex gap-2 mt-4">
              <div className="h-8 w-20 bg-primary/20 rounded" />
              <div className="h-8 w-20 bg-dark-border rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
