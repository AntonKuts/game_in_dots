String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

const getGameSettingsForSelect = gameSettings => ([
        ...Object.entries(gameSettings)

        .map(gameSetting => ({
            'text': gameSetting[0].capitalize(),
            'value': `${gameSetting[1].field}, ${gameSetting[1].delay}`
        })),
        {
            'text': 'Pick game mode',
            'value': ''
        }
        ]
    .reverse()
);

export default getGameSettingsForSelect;
