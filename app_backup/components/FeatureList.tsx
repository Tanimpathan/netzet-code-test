export default function FeatureList() {
  const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers"
  ]

  return (
    <ul className="list-none space-y-3 mb-6">
      {features.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-yellow-400">✨</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
