const getGameSettingsForSelect = gameSettings => (
    [...Object.entries(gameSettings)
        .map(gameSetting => ({
            'text': gameSetting[0]
                ? `${gameSetting[0][0].toUpperCase()}${gameSetting[0].slice(1)}`
                : '',
            'value': gameSetting[1]?.field && gameSetting[1]?.delay
                ? `${gameSetting[1].field}, ${gameSetting[1].delay}`
                : ''
        })),
        {
            'text': 'Pick game mode',
            'value': ''
        }]
        .reverse()
);

export default getGameSettingsForSelect;
