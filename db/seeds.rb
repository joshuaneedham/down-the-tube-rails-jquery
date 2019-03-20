User.create!([
  {email: "test@test.com", password: "changeme", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2019-02-13 22:07:16", last_sign_in_at: "2019-02-13 22:07:16", current_sign_in_ip: "::1", last_sign_in_ip: "::1", provider: "facebook", uid: "10215323990756223", name: "Joshua Needham", image: "http://graph.facebook.com/v2.10/10215323990756223/picture"}
  ])
    Firearm.create!([
      {name: "Kelbly's NYX", firearm_type: "Bolt-Action", description: "Custom precision rifle", user_id: 1},
      {name: "MPA Truck Gun", firearm_type: "Bolt-Action", description: "Custom precision rifle", user_id: 1},
      {name: "DTA", firearm_type: "Bolt-Action", description: "Custom precision rifle", user_id: 1},
      {name: "Coyote Trap", firearm_type: "Bolt-Action", description: "Custom precision rifle", user_id: 1}
    ])
Barrel.create!([
  {caliber: "6x47 Lapua", barrel_type: "Stainless", length: "24.0", twist: "7.0", contour: "Sundero", rifling: "5r", firearm_id: 1},
  {caliber: "224 Valkyrie", barrel_type: "Stainless", length: "18.0", twist: "7.0", contour: "Rem Mag Sporter", rifling: "5r", firearm_id: 2},
  {caliber: "6.5x47 Lapua", barrel_type: "Stainless", length: "24.0", twist: "7.0", contour: "Sundero", rifling: "5r", firearm_id: 3},
  {caliber: "308 Winchester", barrel_type: "Stainless", length: "24.0", twist: "7.0", contour: "Sundero", rifling: "5r", firearm_id: 3},
  {caliber: ".223 Wylde", barrel_type: "Stainless", length: "24.0", twist: "7.0", contour: "Sundero", rifling: "5r", firearm_id: 4}

])
Outing.create!([
  {date: "2019-01-31 12:00:00", outing_type: "Match - Competition", shots_fired: 50, firearm_id: 1, user_id: 1},
  {date: "2019-01-31 12:00:00", outing_type: "Range", shots_fired: 50, firearm_id: 2, user_id: 1},
  {date: "2019-01-31 12:10:00", outing_type: "Range", shots_fired: 125, firearm_id: 2, user_id: 1},
  {date: "2019-01-31 12:20:00", outing_type: "Hunting", shots_fired: 15, firearm_id: 2, user_id: 1},
  {date: "2019-01-31 12:30:00", outing_type: "Range", shots_fired: 45, firearm_id: 2, user_id: 1},
  {date: "2019-01-31 12:40:00", outing_type: "Range", shots_fired: 30, firearm_id: 1, user_id: 1},
  {date: "2019-01-31 12:50:00", outing_type: "Hunting", shots_fired: 65, firearm_id: 1, user_id: 1},
  {date: "2019-01-31 13:00:00", outing_type: "Range", shots_fired: 65, firearm_id: 1, user_id: 1},
  {date: "2019-01-31 13:10:00", outing_type: "Hunting", shots_fired: 15, firearm_id: 4, user_id: 1},
  {date: "2019-01-31 13:20:00", outing_type: "Hunting", shots_fired: 10, firearm_id: 4, user_id: 1}
])
