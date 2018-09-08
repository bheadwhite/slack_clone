SELECT * FROM users u
JOIN messages m
    on u.id = m.user_id
    ORDER BY u.id DESC;