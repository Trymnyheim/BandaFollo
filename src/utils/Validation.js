export function checkLength(text, minLimit = 1, maxLimit = undefined) {
    const trimmed = text.trim();
    if (trimmed.length < minLimit)
        return false;
    if (maxLimit !== undefined && trimmed.length > maxLimit)
        return false;
    return true;
}

export function validatePassword(password) {
    // Needs update to allow special characters..
    const format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d.!@#$%^&*]{10,}$/;
    if ((password.length) > 50) return false
    return format.test(password);
}

