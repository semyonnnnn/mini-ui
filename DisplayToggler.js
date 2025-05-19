class DisplayToggler {
    hide(element){
        if(element){
            element.style.display = 'none'
        }
    }
    show(element){
        if(element){
            element.style.display = 'block'
        }
    }
}

export { DisplayToggler };