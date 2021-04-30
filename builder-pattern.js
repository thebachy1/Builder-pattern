class Carta {
    constructor(nombre, color, tipo, costo) {
        this.nombre = nombre
        this.color = color
        this.tipo = tipo
        this.costo = costo
    }
}

class CartaBuilder {
    constructor(nombre, color, tipo, costo) {
        this.carta = new Carta(nombre, color, tipo, costo)
    }

    setHabilidades(habilidades) {
        this.carta.habilidades = habilidades
        return this
    }

    setEfecto(efecto) {
        this.carta.efecto = efecto
        return this
    }

    setAtaque(ataque) {
        this.carta.ataque = ataque
        return this
    }
    
    setDefensa(defensa) {
        this.carta.defensa = defensa
        return this
    }

    build() {
        return this.carta
    }
}

let carta = new CartaBuilder('Heliod, Sun-Crowned', 'blanco', 'Creatura encantamiento', '2 mana, 2 mana blanco').setHabilidades('indestructible').setEfecto('Mientras tu devocion al blanco sea menor que cinco, Heliod no es una criatura.').setAtaque(5).setDefensa(5).build()
console.log(carta)