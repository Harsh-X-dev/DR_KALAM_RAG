import { Lightbulb, Rocket, BookOpen, Quote } from "lucide-react"; // Using Lucide for nice suggestion icons


export const WelcomeScreen = () => {
  return (
    <>
        <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-3xl mx-auto w-full">
          {/* Greeting */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[var(--color-accent-subtle)] rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-2">
              How can I help you today?
            </h1>
            <p className="text-[var(--color-text-muted)]">
              Ask questions, explore his books, or learn about his vision for
              India.
            </p>
          </div>

          {/* Suggested Prompts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <button className="flex flex-col text-left p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] hover:bg-[var(--color-surface-raised)] transition-colors shadow-sm group">
              <div className="flex items-center gap-2 mb-2 text-teal-600 dark:text-teal-400 font-medium text-sm">
                <Rocket className="w-4 h-4" />
                ISRO & Space
              </div>
              <p className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text-primary)] transition-colors">
                Tell me about his role in developing the SLV-III.
              </p>
            </button>

            <button className="flex flex-col text-left p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] hover:bg-[var(--color-surface-raised)] transition-colors shadow-sm group">
              <div className="flex items-center gap-2 mb-2 text-amber-600 font-medium text-sm">
                <Lightbulb className="w-4 h-4" />
                Vision 2020
              </div>
              <p className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text-primary)] transition-colors">
                What were his main pillars for a developed India?
              </p>
            </button>

            <button className="flex flex-col text-left p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] hover:bg-[var(--color-surface-raised)] transition-colors shadow-sm group">
              <div className="flex items-center gap-2 mb-2 text-emerald-600 font-medium text-sm">
                <BookOpen className="w-4 h-4" />
                Literature
              </div>
              <p className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text-primary)] transition-colors">
                Summarize the key learnings from "Wings of Fire".
              </p>
            </button>

            <button className="flex flex-col text-left p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] hover:bg-[var(--color-surface-raised)] transition-colors shadow-sm group">
              <div className="flex items-center gap-2 mb-2 text-purple-600 font-medium text-sm">
                <Quote className="w-4 h-4" />
                Inspiration
              </div>
              <p className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text-primary)] transition-colors">
                What did Dr. Kalam say about dreams and youth?
              </p>
            </button>
          </div>
        </div>
    
      
      </>
  )
}
