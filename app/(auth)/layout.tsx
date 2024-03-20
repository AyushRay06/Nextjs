export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-center border-b">
        Auth Banner Common to both Sign In & Sign Up
      </div>
      {children}
    </div>
  )
}
