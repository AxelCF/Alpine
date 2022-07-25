const disableGroup = (data, group) => {
    if (!data) throw 'Merci de fournir des données';
    if (!group) throw 'Merci de fournir un groupe';

    mutate(data.steps, {group: group});
}

const resetFromStep = (data, index = 0) => {
    if (!data) throw 'Merci de fournir des données';

    mutate(data.steps.slice(index), {reset: true})
}

const mutate = (options, {group, reset}) => {
    for (const option of options) {

        if (reset) {
            option.selected = option.default;
        }

        if (option.group === group) {
            option.selected = false;
        }

        if (option.options) mutate(option.options, {group: group, reset: reset});
    }
}


// TESTS //

beforeEach(() => {
    initializeTestData();
});

// * DISABLE GROUP * //

test("retourne un message d'erreur si aucun argument n'est fourni", () => {
    expect(() => disableGroup()).toThrow('Merci de fournir des données');
});

test("retourne un message d'erreur avec un seul argument", () => {
    expect(() => disableGroup(testData)).toThrow('Merci de fournir un groupe');
});

test("step11.selected et step12.selected = false avec les arguments testData et 'group1'", () => {
    disableGroup(testData, 'group1');
    expect(testData.steps[0].options[0].selected).toBe(false);
    expect(testData.steps[0].options[1].selected).toBe(false);
});

test("step2221.selected, step2222.selected et step2223.selected = false avec les arguments testData et 'group2'", () => {
    disableGroup(testData, 'group2');
    expect(testData.steps[1].options[1].options[1].options[0].selected).toBe(false);
    expect(testData.steps[1].options[1].options[1].options[1].selected).toBe(false);
    expect(testData.steps[1].options[1].options[1].options[2].selected).toBe(false);
});


// * RESET FROM STEP * //

test("retourne un message d'erreur si aucun argument n'est fourni", () => {
    expect(() => resetFromStep()).toThrow('Merci de fournir des données');
});

test("step2221.selected = false, step2222.selected = true, step2222.selected = false et step11.selected = false avec l'argument testData", () => {
    resetFromStep(testData);
    expect(testData.steps[1].options[1].options[1].options[0].selected).toBe(false);
    expect(testData.steps[1].options[1].options[1].options[1].selected).toBe(true);
    expect(testData.steps[1].options[1].options[1].options[2].selected).toBe(false);
    expect(testData.steps[0].options[0].selected).toBe(false);
});

test("step2221.selected = false, step2222.selected = true, step2222.selected = false et step11.selected = true avec les arguments testData et 1", () => {
    resetFromStep(testData, 1);
    expect(testData.steps[1].options[1].options[1].options[0].selected).toBe(false);
    expect(testData.steps[1].options[1].options[1].options[1].selected).toBe(true);
    expect(testData.steps[1].options[1].options[1].options[2].selected).toBe(false);
    expect(testData.steps[0].options[0].selected).toBe(true);
});


// TEST DATA //

let testData;

function initializeTestData() {
    testData = JSON.parse(JSON.stringify(initialTestData));
}

const initialTestData = {
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
                    default: false,
                    group: 'group1'
                },
                {
                    type: 0,
                    label: 'Step12',
                    slug: 'step12',
                    price: 50,
                    selected: false,
                    default: false,
                    group: 'group1'
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
                                    default: false,
                                    group: 'group2'
                                },
                                {
                                    type: 0,
                                    label: 'Step2222',
                                    slug: 'step2222',
                                    price: 200,
                                    selected: false,
                                    default: true,
                                    group: 'group2'
                                },
                                {
                                    type: 0,
                                    label: 'Step2223',
                                    slug: 'step2223',
                                    price: 200,
                                    selected: false,
                                    default: false,
                                    group: 'group2'
                                }
                            ]
                        },
                    ]
                },
            ]
        }
    ]
};