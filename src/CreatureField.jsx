import Creature from './Creature.jsx';

function CreatureField() {
    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: '#6b8c66'
    };

    return (
        <div style={fieldStyle}>
            <Creature
                name="Naranja"
                age={3}
                imageUrl="/images/first_sleep.png"
                x={120}
                y={140}
            />
            <Creature
                name="Kinsky"
                age={5}
                imageUrl="/images/second_sleep.png"
                x={300}
                y={260}
            />
            <Creature
                name="Bean"
                age={2}
                imageUrl="/images/third_sleep.png"
                x={550}
                y={40}
            />
            <Creature
                name="Leipä"
                age={4}
                imageUrl="/images/fourth_sleep.png"
                x={150}
                y={420}
            />
            <Creature
                name="Mista"
                age={4}
                imageUrl="/images/fifth_sleep.png"
                x={550}
                y={590}
            />
        </div>
    );
}

export default CreatureField;
