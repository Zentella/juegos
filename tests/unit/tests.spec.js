import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
    it('longitud del título', () => {

        const wrapper = shallowMount(Navbar, {
            stubs: ['router-link', 'router-view'] // para q reconozca (router-link), Recibe un array de los nombres de componentes hijos que se reemplazarán
            // con un stub, o un objeto con los nombres y un Componente o true para realizar el
            // stub con una implementación específica o no.
            // Se recomienda utilizar Stubs y Spies siempre que sea posible.
        })

        let title = wrapper.find('nav a i') // contenido de i
        expect(title.text()).to.have.length(13)
    })

    it('Encuentra:  palabra “Administración”', () => {
        const wrapper = shallowMount(Navbar, {
            stubs: ['router-link', 'router-view']
        })

        let palabra = wrapper.find('nav div ul li:nth-child(3) span i') // 3º hijo li
        expect(palabra.text()).to.be.equal('Administración')
    })
})

/*
npm run test:unit
*/
