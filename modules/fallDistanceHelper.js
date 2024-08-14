export function calculateFallDistance(time) {
    return ((1 / 2) * 9.8 * time ^ 2);
}

export function showFallDistance(distance) {
    alert ("Расстояние падения объекта равно " + distance + " метрам");
}