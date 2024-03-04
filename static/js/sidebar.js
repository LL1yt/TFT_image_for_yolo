$(document).ready(() => {
    const sidebarToggle = $('#sidebar-toggle');
    const sidebar = $('#sidebar');
    const content = $('#content');

    sidebarToggle.click(() => {
        sidebar.toggleClass('active');
        content.toggleClass('active');
    });
});