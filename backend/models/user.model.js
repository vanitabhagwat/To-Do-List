const userSchema = new Schema ({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength : 5
    },
 },
 {
    timestamp = true,
 });