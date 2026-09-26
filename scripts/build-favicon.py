from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "brand-mark.png"
CREAM = (244, 241, 234, 255)


def build_icon(size: int, padding_ratio: float = 0.08) -> Image.Image:
    source = Image.open(SOURCE).convert("RGBA")
    alpha_box = source.getchannel("A").getbbox()
    if alpha_box is None:
        raise ValueError("Brand mark has no visible pixels")

    mark = source.crop(alpha_box)
    available = round(size * (1 - 2 * padding_ratio))
    mark.thumbnail((available, available), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (size, size), CREAM)
    position = ((size - mark.width) // 2, (size - mark.height) // 2)
    canvas.alpha_composite(mark, position)
    return canvas


icon = build_icon(512)
icon.save(ROOT / "app" / "icon.png", optimize=True)
icon.save(ROOT / "app" / "apple-icon.png", optimize=True)

favicon = build_icon(256, padding_ratio=0.06).convert("RGBA")
favicon.save(
    ROOT / "app" / "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
)
