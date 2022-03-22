import { render, screen } from '../../../test-utils/testing-library-utils'
import Options from '../Options'

test('displays image for each scoop option from the server', async ()=>{
    render (<Options optionType='scoops' />)

    // find images
    //const scoopImages = await screen.findByRole('img', { name: 'Vanilla scoop' })
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
    // in our mocked data we have 2 chocolate and vanilla
    expect(scoopImages.length).toBe(2)

    // confirm all text of images
    const allText = scoopImages.map((element) => element.alt)
    expect(allText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

// SECOND QUIZ WE ARE TESTING TOPPINGS

test('displays image for each topping option from the server', async ()=>{
    render (<Options optionType='toppings' />)
    const scoopImages = await screen.findAllByRole('img', { name: /topping$/i })
    expect(scoopImages.length).toBe(3)

    const allText = scoopImages.map((element) => element.alt)
    expect(allText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
})
