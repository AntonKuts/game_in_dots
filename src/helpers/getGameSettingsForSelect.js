const getGameSettingsForSelect = gameSettings => (
    Object.entries(gameSettings)
        .map(gameSetting => ({
            'text': gameSetting[0],
            'value': `${gameSetting[1].field}, ${gameSetting[1].delay}`
        }))
);

export default getGameSettingsForSelect;
