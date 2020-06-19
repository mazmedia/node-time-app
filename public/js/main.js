const main = () => {
    const d = new Date();
    const __TIME_SPAN__ = document.querySelector('#time')

    __TIME_SPAN__.innerHTML = moment(d).format('LTS zz');
}