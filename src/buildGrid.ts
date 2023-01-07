const createCell = (
  width: number,
  height: number,
  positionX: number,
  positionY: number
) => {
  add([pos(positionX, positionY), rect(width, height), outline(1)]);
};

const buildGrid = (screenWidth: number, screenHeight: number) => {
  const cellWidth = 40;
  const cellHeight = 40;
  const cellsPerRow = screenWidth / cellWidth;
  const cellsPerColumn = screenHeight / cellHeight;
  const totalCells = cellsPerRow * cellsPerColumn;

  for (let i = 0; i < totalCells; i++) {
    const positionX = (i % cellsPerRow) * cellWidth;
    const positionY = Math.floor(i / cellsPerRow) * cellHeight;
    createCell(cellWidth, cellHeight, positionX, positionY);
  }
};

export default buildGrid;
