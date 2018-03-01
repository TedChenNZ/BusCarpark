export const COMMANDS = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT',
};

export function parseInput(input) {
  if (input && typeof input === 'string') {
    const cmd = input.split(' ')[0];
    const commandList = Object.values(COMMANDS);
    const index = commandList.indexOf(cmd);
    if (index > -1) {
      return commandList[index];
    }
  }
  throw new Error('Invalid input');
}

export default parseInput;
