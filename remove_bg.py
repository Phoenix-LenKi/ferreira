from rembg import remove
from PIL import Image
import sys

input_path = 'public/lead-assets/logo.png'
output_path = 'public/lead-assets/logo.png'

try:
    input_image = Image.open(input_path)
    # Process
    output_image = remove(input_image)
    output_image.save(output_path)
    print("Background removed successfully.")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
