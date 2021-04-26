SELECT * FROM players

SELECT * FROM seasons_stats

SELECT p.id, p.player, p.height, p.weight, p.college, p.born, s.position, s.tm
FROM players p, seasons_stats s
WHERE p.id = s.player_id

SELECT s.player_id, p.college, s.year, s.position, 
s.two_point_percentage, s.fg_percentage, s.ft_percentage, s.ts_percentage
FROM players p, seasons_stats s
WHERE p.id = s.player_id 
AND p.id in(0,1,2)

SELECT * 
FROM players p
inner join
seasons_stats s ON
p.id = s.player_id
and id in (0,1,2)