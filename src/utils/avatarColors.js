const backgrounds = ['#fbf8cc', '#ffcfd2', '#cfbaf0', '#90dbf4', '#98f5e1', '#b9fbc0']
const colors = ['#979463', '#ff6a72', '#9962e8', '#3896b4', '#4faa96', '#519e5e']

export const getAvatarColor = () => {
    const colorIndex = Math.floor(Math.random()*backgrounds.length)
    return {
        background: backgrounds[colorIndex],
        color: colors[colorIndex],
    }
}