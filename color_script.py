import sys
try:
    from PIL import Image
    import collections

    def get_colors(image_path):
        img = Image.open(image_path)
        img = img.resize((150, 150))
        colors = img.getcolors(150*150)
        
        # Sort colors by frequency, ignoring transparent or near white/black if wanted
        # Simple sorting
        sorted_colors = sorted(colors, key=lambda t: t[0], reverse=True)
        # return top 5 mostly non-transparent, non-white
        top = []
        for count, rgba in sorted_colors:
            if len(rgba) == 4 and rgba[3] < 10:
                continue # mostly transparent
            # ignore pure white or black backgrounds
            if rgba[0] > 240 and rgba[1] > 240 and rgba[2] > 240:
                continue
            if rgba[0] < 15 and rgba[1] < 15 and rgba[2] < 15:
                continue
            top.append((count, rgba))
            if len(top) >= 5:
                break
        return top

    print(get_colors(sys.argv[1]))
except Exception as e:
    print(e)
