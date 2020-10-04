export class Program {
    width: number
    height: number
    x: number
    y: number
    name: string
    constructor(name: string, x1: number, y1: number, x2: number, y2: number) {
        this.name = name
        this.width = x2 - x1
        this.height = y2 - y1
        this.x = x1
        this.y = y2
    }
}

export class DesktopManager {
    windows: Program[] = []
    display: string[] = Array(30).fill('.'.repeat(60))
    private insertAt(x: number, y: number, content: string) {
        const line = this.display[y]
        this.display[y] = line.substr(0, x) + content + line.substr(x + content.length)
    }
    add(program: Program) {
        this.windows = [...this.windows, program]
        return {
            draw: () => {
                const adjeustedName = program.name.length > program.width - 2 ? program.name.substr(0, program.width - 1) : program.name
                this.insertAt(program.x, program.y, `+${adjeustedName}${'-'.repeat(program.width - adjeustedName.length - 1)}+`);
                [...Array(program.height - 2)].forEach((e, i) => this.insertAt(program.x, program.y + i + 1, '|' + ' '.repeat(program.width - 1) + '|'))
                this.insertAt(program.x, program.y + program.height - 1, '+' + '-'.repeat(program.width - 1) + '+')
            }
        }
    }
    print() {
        console.log(this.display.join('\n'))
    }
}
