#!/bin/bash

# Create icons directory if it doesn't exist
mkdir -p icons

# Base64 encoded small bible icon in blue color
cat > base_icon.svg << 'EOF'
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="100" fill="#1a237e"/>
  <path d="M128 96h256v320H128V96zm240 304V112H144v288h224zm-208-16h192v-16H160v16zm0-48h192v-16H160v16zm0-48h192v-16H160v16zm0-48h192v-16H160v16z" fill="white"/>
</svg>
EOF

# Install ImageMagick if not present
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is required but not installed. Please install it first."
    exit 1
fi

# Generate different icon sizes
sizes=(72 96 128 144 152 192 384 512)
for size in "${sizes[@]}"; do
    convert -background none -size ${size}x${size} base_icon.svg "icons/icon-${size}x${size}.png"
done

# Generate favicon.ico (multi-size)
convert -background none base_icon.svg -define icon:auto-resize=64,48,32,16 favicon.ico

# Generate apple-touch-icon
convert -background none -size 180x180 base_icon.svg apple-touch-icon.png

# Clean up
rm base_icon.svg

echo "Icons generated successfully!"
