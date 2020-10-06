import { DesktopManager, Program } from "."

const GUI = new DesktopManager()

GUI.add(new Program('Benedu', 10, 8, 20, 13)).draw()
GUI.add(new Program('ChromeChromeChromeChrome', 2, 3, 18, 16)).draw()
GUI.print()