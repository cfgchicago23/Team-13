
export const AuthPage = () => {
    const _goBack = () => console.log('Went back');
    
    const _handleSearch = () => console.log('Searching');
    
    const _handleMore = () => console.log('Shown more');
    
    return (
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
    </Button>
    )
};
