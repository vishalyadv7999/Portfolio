"""Generate the typography-only social card. Requires Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
canvas = Image.new('RGB', (1200, 630), '#080f1d')
draw = ImageDraw.Draw(canvas)
regular = 'C:/Windows/Fonts/segoeui.ttf'
bold = 'C:/Windows/Fonts/segoeuib.ttf'
def text(x, y, value, size, color='#edf4ff', heavy=False):
    draw.text((x,y), value, font=ImageFont.truetype(bold if heavy else regular,size), fill=color)

draw.rounded_rectangle((48,48,1152,582),radius=24,outline='#25384b',width=2)
draw.rectangle((84,92,140,98),fill='#34d399')
text(84,126,'VISHAL YADAV',68,heavy=True)
text(86,226,'Full-stack developer.',45,heavy=True)
text(86,286,'Focused on backend engineering.',37,'#9bacbe')
text(86,392,'React  /  Node.js  /  MongoDB  /  Real-time systems',25,'#6ee7b7')
draw.line((86,458,1114,458),fill='#25384b',width=2)
text(86,490,'B.Tech CSE 2027',24)
text(780,490,'Delhi NCR, India',24,'#9bacbe')
canvas.save(root/'public/og-preview.png',optimize=True)
print('Created public/og-preview.png (1200 x 630).')
