document.addEventListener("DOMContentLoaded", function() {
    VANTA.NET({
        el: ".resume-item",  // Applies effect to ALL resume items
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,  // Neural net color (white)
        backgroundColor: 0x000000, // Keep the background black
        points: 8.0, // Number of points in the net
        maxDistance: 20.0, // Distance lines can stretch
        spacing: 15.0 // Distance between points
    });
});
