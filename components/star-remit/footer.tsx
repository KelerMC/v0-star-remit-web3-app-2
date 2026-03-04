export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img 
            src="/favicon-32x32.png" 
            alt="EcoXport Logo" 
            className="h-7 w-7 rounded-md"
          />
          <span className="text-sm font-semibold text-foreground">
            EcoXport
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Built on Stellar. Not financial advice.
        </p>
      </div>
    </footer>
  )
}
