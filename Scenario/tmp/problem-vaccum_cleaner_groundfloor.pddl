;; problem file: problem-vaccum_cleaner_groundfloor.pddl
(define (problem vaccum_cleaner_groundfloor)
    (:domain vaccum_cleaner_groundfloor)
    (:objects kitchen entryway living_room pantry ground_bathroom landing_ground off on vaccum_cleaner_groundfloor)
	(:init (room kitchen) (room entryway) (room living_room) (room pantry) (room ground_bathroom) (room landing_ground) (room1 kitchen) (room2 pantry) (room3 living_room) (room4 entryway) (room5 ground_bathroom) (room6 landing_ground) (state off) (state on) (vaccum vaccum_cleaner_groundfloor) (adj kitchen entryway) (adj entryway kitchen) (adj kitchen pantry) (adj pantry kitchen) (adj kitchen living_room) (adj living_room kitchen) (adj living_room entryway) (adj entryway living_room) (adj ground_bathroom entryway) (adj entryway ground_bathroom) (adj entryway landing_ground) (adj landing_ground entryway) (in_room vaccum_cleaner_groundfloor kitchen) (switched_off vaccum_cleaner_groundfloor) (in_base vaccum_cleaner_groundfloor))
	(:goal (and (clean_ground_floor vaccum_cleaner_groundfloor)))
)