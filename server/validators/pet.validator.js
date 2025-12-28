const yup = require('yup');

module.exports.createPetSchema = yup.object({
    name: yup.string().trim().min(1).max(32).required(),
    owner: yup.string().trim().min(1).max(64).required(),
    ownerContacts: yup.string().length(13).matches(/^\+\d{12}$/, 'Phone number must correspond +XX XXX XXX XX XX').required(),
    description: yup.string().trim().min(1).max(255).required(),
    city: yup.string().oneOf(['Kyiv', 'Dnipro', 'Zaporizhzhia', 'Odesa', 'New York']).required(),
    lostDate: yup.date().max(new Date().getFullYear()).required(),
    petTypeId: yup.number().min(1).required(),
});