class Normal {
  update(item) {
    item.sellIn--
    if (item.quality < 50 && item.quality > 0) item.quality--
    if (item.sellIn <= 0 && item.quality > 0) item.quality--
  }
}

module.exports = Normal
