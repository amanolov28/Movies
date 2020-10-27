export default async function commonHandler(view){
    this.partials = {
        navbar: await this.load('../Views/Common/navbar.hbs'),
        footer: await this.load('../Views/Common/footer.hbs'),
        notifications: await this.load('../Views/Common/notifications.hbs')
    }
    if (view) {
        await this.partial(view)
    }
}