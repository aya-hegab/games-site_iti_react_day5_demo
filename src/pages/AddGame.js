import React, { useState } from "react";

export default function AddGame() {
    const [gameForm, setGameForm] = useState({
        name: "",
        description: "",
        price: "",
    });
    const [gameFormErrors, setGameFormErrors] = useState({
        name: null,
        description: null,
        price: null,
    });
    const handleFieldChange = (event) => {
        console.log(event.target.value);
        const field_name = event.target.name;
        const field_value = event.target.value;
        // switch (field_name) {
        //     case 'name':
        //         setGameForm({
        //             ...gameForm,
        //             name: field_value,
        //         });
        //         break;
        //     default:
        //         break;
        // }
        if (field_name === "name") {
            setGameForm({
                ...gameForm,
                name: field_value,
            });

            setGameFormErrors({
                ...gameFormErrors,
                name: field_value.length === 0 ? "This field is required" : null,
            });
        }

        if (field_name === "description") {
            setGameForm({
                ...gameForm,
                description: field_value,
            });

            setGameFormErrors({
                ...gameFormErrors,
                description:
                    field_value.length === 0
                        ? "This field is required"
                        : field_value.length < 10
                            ? "Min length is 10"
                            : field_value.length > 200
                                ? "Max length is 200"
                                : null,
            });
        }

        if (field_name === "price") {
            setGameForm({
                ...gameForm,
                price: field_value,
            });

            setGameFormErrors({
                ...gameFormErrors,
                price:
                    field_value.length === 0
                        ? "This field is required"
                        : Number(field_value) === 0
                            ? "Value should be greater than 0"
                            : null,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gameForm);
    };

    return (
        <>
            <h2>Add Game Form</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">
                        Game Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="nameInput"
                        value={gameForm.name}
                        onChange={handleFieldChange}
                        name="name"
                    />
                    {gameFormErrors.name && (
                        <div id="nameInput" class="form-text text-danger">
                            {gameFormErrors.name}
                        </div>
                    )}
                </div>
                <div class="mb-3">
                    <label for="descriptionInput" class="form-label">
                        Description
                    </label>
                    <textarea
                        type="text"
                        rows={5}
                        class="form-control"
                        id="descriptionInput"
                        value={gameForm.description}
                        onChange={handleFieldChange}
                        name="description"
                    ></textarea>
                    {gameFormErrors.description && (
                        <div id="descriptionInput" class="form-text text-danger">
                            {gameFormErrors.description}
                        </div>
                    )}
                </div>
                <div class="mb-3">
                    <label for="priceInput" class="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        id="priceInput"
                        value={gameForm.price}
                        onChange={handleFieldChange}
                        name="price"
                    />
                    {gameFormErrors.price && (
                        <div id="descriptionInput" class="form-text text-danger">
                            {gameFormErrors.price}
                        </div>
                    )}
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

// Form => state => {initial values}
// each field => value , name , onChange
// changeMethod => name => update value / update errors