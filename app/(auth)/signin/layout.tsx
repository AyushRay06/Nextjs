export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center p-8">Sign In Layout Banner</div>
      {children}
    </div>
  )
}
