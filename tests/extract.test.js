const getOption = (data, slug) => {
    if (!data) return 'Merci de fournir des données';
    if (!slug) return 'Merci de fournir une clé';

    return extract(data.steps, slug)
}

const extract = (options, slug) => {
    for (const option of options) {
        if (option.slug === slug) return option;

        if (option.options) {
            const findOption = extract(option.options, slug);
            if (findOption) return findOption;
        }
    }
}


// TESTS //

test("retourne un message d'erreur si aucun argument n'est fourni", () => {
    expect(getOption()).toBe('Merci de fournir des données');
});

test("retourne un message d'erreur avec un seul argument", () => {
    expect(getOption(testData)).toBe('Merci de fournir une clé');
});

test("retourne l'objet Step11 avec les arguments testData et 'step11'", () => {
    expect(getOption(testData, 'step11')).toHaveProperty('label', 'Step11')
});

test("retourne l'objet Step12 avec les arguments testData et 'step12'", () => {
    expect(getOption(testData, 'step12')).toHaveProperty('label', 'Step12')
});

test("retourne l'objet Step221 avec les arguments testData et 'step221'", () => {
    expect(getOption(testData, 'step221')).toHaveProperty('label', 'Step221')
});

test("retourne l'objet Step2222 avec les arguments testData et 'step2222'", () => {
    expect(getOption(testData, 'step2222')).toHaveProperty('label', 'Step2222')
});




// TEST DATA //

const testData = {
    price: 0,
    currentModel: null,
    currentStep: 0,
    steps: [
        {
            label: 'Step1',
            slug: 'step1',
            options: [
                {
                    type: 0,
                    label: 'Step11',
                    slug: 'step11',
                    price: 0,
                    selected: true,
                    default: true
                },
                {
                    type: 0,
                    label: 'Step12',
                    slug: 'step12',
                    price: 50,
                    selected: false,
                    default: false
                },
            ]
        },
        {
            label: 'Step2',
            slug: 'step2',
            options: [
                {
                    type: 0,
                    label: 'Step21',
                    slug: 'step21',
                    price: 100,
                    selected: true,
                    default: true
                },
                {
                    type: 2,
                    label: 'Step22',
                    slug: 'step22',
                    options: [
                        {
                            type: 0,
                            label: 'Step221',
                            slug: 'step221',
                            price: 100,
                            selected: true,
                            default: false
                        },
                        {
                            type: 2,
                            label: 'Step222',
                            slug: 'step222',
                            price: 200,
                            selected: false,
                            default: true,
                            options: [
                                {
                                    type: 0,
                                    label: 'Step2221',
                                    slug: 'step2221',
                                    price: 100,
                                    selected: true,
                                    default: false
                                },
                                {
                                    type: 0,
                                    label: 'Step2222',
                                    slug: 'step2222',
                                    price: 200,
                                    selected: false,
                                    default: true
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    ]
};