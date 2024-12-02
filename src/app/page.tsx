import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Procurement Analysis Tool</h1>
      <Link href="/projects">View Projects</Link>
    </div>
  )
}