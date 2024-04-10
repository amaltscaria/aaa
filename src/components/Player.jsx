import { useState } from 'react';
const Player = ({ initialName, symbol }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input onChange={handleChange} type='text' required value={playerName}></input>
    }
    let buttonCaption = isEditing ? 'Save' : 'Edit';
    return (
      <li>
        <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
        </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
      </li>
    );
}

export default Player;