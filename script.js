.images-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.images-container img {
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.images-container img.selected {
  transform: scale(1.1);
}