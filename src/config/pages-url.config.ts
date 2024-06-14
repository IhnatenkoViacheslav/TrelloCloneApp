class DASHBOARD {
  private root = '/lc'

  HOME = this.root
  TASKS = `${this.root}/tasks`
  TIMER = `${this.root}/timer`
  HABITS = `${this.root}/habits`
  SETTINGS = `${this.root}/settings`
  TIME_BLOCKING = `${this.root}/time-blocking`
}

export const DASHBOARD_PAGES = new DASHBOARD()
