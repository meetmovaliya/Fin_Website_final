import sys
from PIL import Image, ImageDraw

def flood_fill_remove_bg(input_path, output_path, tolerance=30):
    try:
        img = Image.open(input_path).convert("RGBA")
        width, height = img.size
        pixels = img.load()
        
        # Get background color from top-left corner
        bg_color = pixels[0, 0]
        print(f"Detected background color: {bg_color}")
        
        # Queue for flood fill
        # (x, y)
        queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
        visited = set(queue)
        
        # Helper to check color difference
        def color_match(c1, c2, tol):
            return abs(c1[0] - c2[0]) <= tol and \
                   abs(c1[1] - c2[1]) <= tol and \
                   abs(c1[2] - c2[2]) <= tol

        # BFS
        # To avoid infinite loops or massive memory usage with recursion, we use a loop with a list
        # For performance in Python, this is still slow for 1024x1024.
        # fast optimization: ImageDraw.floodfill is available in newer Pillow 
        # But ImageDraw.floodfill fills with a color, not transparent (0,0,0,0) directly?
        # Actually ImageDraw.floodfill supports checking equality, but maybe not tolerance easily?
        # Let's try native ImageDraw.floodfill first if possible, but we need transparency.
        # We can fill with a specific "magic" color that isn't in the image, then swap that color for transparent.
        
        # Finding a magic color (e.g., bright magenta)
        magic_color = (255, 0, 255, 255) 
        
        # Use Pillow's floodfill
        # It requires `ImageDraw.floodfill(image, xy, value, border=None, thresh=0)`
        # thresh is the tolerance!
        
        ImageDraw.floodfill(img, (0, 0), magic_color, thresh=tolerance)
        ImageDraw.floodfill(img, (width-1, 0), magic_color, thresh=tolerance)
        ImageDraw.floodfill(img, (0, height-1), magic_color, thresh=tolerance)
        ImageDraw.floodfill(img, (width-1, height-1), magic_color, thresh=tolerance)
        
        # Now replace magic_color with transparent
        datas = img.getdata()
        newData = []
        for item in datas:
            if item == magic_color:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully saved transparent image to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

# Run
input_file = '/Users/meetmovaliya/.gemini/antigravity/brain/80c70178-1f02-411b-85f5-7e52b6d232fe/uploaded_image_1768748671092.jpg'
flood_fill_remove_bg(input_file, '/Users/meetmovaliya/Desktop/wesbite_fin/public/logo.png')
flood_fill_remove_bg(input_file, '/Users/meetmovaliya/Desktop/wesbite_fin/src/assets/logo_final.png')
