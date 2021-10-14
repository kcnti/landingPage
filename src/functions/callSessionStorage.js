export function getUsername() {
    const user = sessionStorage.getItem('username');
    return user
}