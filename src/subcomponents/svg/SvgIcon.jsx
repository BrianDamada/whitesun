import React, { useState, useEffect } from 'react'

const SvgIcon = ({ src, className = '' }) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        const LoadSvg = async () => {
            const response = await fetch(src);
            const svgText = await response.text();

            const updatedSvg = svgText
                .replace(/fill='[^']*'/g, 'fill="currentColor"')
                .replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
            setSvgContent(updatedSvg);
        };

        LoadSvg();
    }, [src]);

  return (
    <div
        className={className}
        dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

export default SvgIcon
