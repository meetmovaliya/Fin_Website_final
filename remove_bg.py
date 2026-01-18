from PIL import Image

def remove_white_background(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Change all white (also shades of whites)
            # Find all pixels that are very light (R, G, B > 240)
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))  # Transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path} -> {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

# Process both locations
remove_white_background('/Users/meetmovaliya/Desktop/wesbite_fin/public/logo.png', '/Users/meetmovaliya/Desktop/wesbite_fin/public/logo.png')
remove_white_background('/Users/meetmovaliya/Desktop/wesbite_fin/public/logo.png', '/Users/meetmovaliya/Desktop/wesbite_fin/src/assets/logo_final.png')
