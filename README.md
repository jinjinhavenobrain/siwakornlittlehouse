# House Studio 3D — V5 room creator

## Open your house

1. Extract the entire ZIP. Do not open the webpage while it is still inside the ZIP.
2. Double-click **index.html**, or **Open-House.bat** on Windows.
3. Use Chrome or Edge with hardware acceleration enabled. No installation, account, internet connection or local server is needed for normal use.

Keep `index.html`, `style.css` and the `assets` folder together.

## Create a room from scratch

New visitors see a simple room-size setup. Returning visitors keep their current autosave and can choose **Start from scratch** at any time. Enter a project name, width, length and ceiling height, or use a suggested size. The result is an empty room without inferred furniture, doors, bathroom or balcony. Room width and length support 2–10 m; ceiling height supports 2–3 m. Build exposes simple width/length controls first; exact wall coordinates are under Advanced wall positions.

The Rooms panel walks through shaping the room, decorating it and adding an upper floor. Doors and windows start on different walls and additional openings are placed in a free interval. All sizes use metres. Project names are preserved when furniture is added.

## Connect multiple floors

Use **Build → Floors, stairs & ladders**, or **Add / manage floors** beside the floor tabs. Choose one of eight styles: wooden stairs, open timber stairs, floating stairs, L-shaped stairs, spiral stairs, wooden loft ladder, metal loft ladder or space-saving alternating steps. **Add floor** adds an empty upper room and fits the selected connection into a clear space on both floors. Interior dividers can optionally be copied.

Projects support up to four floors. Each floor has its own name, furniture, walls, openings, finish and ceiling height. Floor tabs isolate a room for editing. **View whole house** stacks the actual geometry, including furniture, at the ceiling height plus a 20 cm slab. Upper-floor and ceiling openings follow the connection, with illustrative guardrails. Style changes and rotations find another clear position if necessary; width, floor space, position and color remain editable. The top floor can be removed with undo available. Undo/redo, autosave, named copies and JSON exports include the entire project. Version 1 single-room saves remain compatible.

Connection placement reserves a 50 cm conceptual landing at both ends and avoids furniture, partitions, entrances and adjacent flights. This is a planning aid, not a minimum code-compliant landing specification. Blocky explores one selected floor; inter-floor walking and ladder climbing are not simulated.

## New decoration

The **Tree clothes rack** follows the reference's round base, wooden pole, branches and circular tray. The **Round wooden table** has a circular slatted top and timber base. Select it and drag **Round tabletop** to change the top diameter live; precise diameter and height controls are separate. The top stays circular and the base is proportioned independently. Both items can be moved, rotated, duplicated, recolored and saved like other furniture.

## Four modes

- **Rooms:** start a new empty room, follow the three starter steps, or rotate, zoom and pan. Switch between 3D, plan, front and rear views; show/hide roof and walls; restore the supplied room; choose daylight, sunset or evening.
- **Build:** choose a floor or structural element in the model or component list. Main and bathroom floors have eight finishes: veined marble, natural stone, wood planks, herringbone wood, matt porcelain, microcement, terrazzo and ceramic tiles. Change the tint, tile/pattern size and direction independently; the pattern stays intact when recolored. Select an exterior wall and split it using a distance from the section start, or use **Split wall** and click a point in 3D or Plan. Each section has its own color. Select a section and choose **Extend section as bathroom**; its length and outward depth are editable and it stays attached when the house wall moves. The shared connection is one wall with one doorway, rather than overlapping shells. **Draw wall** uses two clicks in Plan to add an interior partition. Doors, windows and partitions remain individually editable. All edits are included in undo, named layouts and JSON exports.
- **Decorate:** add from the 37-item catalogue. Drag furniture, adjust exact sizes and positions, rotate, duplicate or delete. R rotates; arrows nudge; Delete removes. Ctrl+Z / Ctrl+Y undo and redo. A red selection box and inspector warnings mark overlaps. The 10 cm snap can be disabled.
- **Simulate:** click a floor location or use bed, desk, bathroom, balcony and entrance actions. Blocky has exactly six rectangular parts and uses pathfinding. Daily routine cycles through destinations. Adjust height from 150–195 cm, follow the person and check destination access.

An unfolded sofa bed takes additional space. Loft beds include a ladder; desks underneath are separate movable objects. Furniture can also be placed outside. Bathroom fixtures are editable like other furniture.

## Keep and share ideas

- Changes autosave in the current browser, subject to its local-file storage support.
- **Layouts** saves named copies. Restoring the supplied room can be undone. Existing browser autosaves are preserved; choose **My little house** under Rooms to restore the supplied reference room.
- **Export JSON** is your portable backup. Import it to another browser or computer.
- The camera button exports a PNG of the 3D scene. **Present** hides the editing panels; Escape exits.
- The slow-orbit button gives a continuous exterior/interior overview. Turn the roof on for an exterior tour.


## Room reconstructed from video

Rooms also offers two reference models. **My little house** remains the original supplied house. **My room · video model** is a separate bedroom reconstruction with an estimated 3.90 × 4.60 m footprint and 2.48 m ceiling. It includes the visible timber floor and bed, blue bedding, dark back-wall paneling, wooden desk and wardrobe, woven chair, navy curtains, storage shelves, basket, green loft ladder and framing, and an actual cutout with descending stairs. The original recording and extracted photographs are not distributed with the app. This reference represents one level of the two-floor room; use the floor creator to add editable levels and new connections.

The new furniture is editable in Decorate. Build → Main floor edits the footprint and ceiling height; the estimate label remains until you confirm that measured dimensions have been entered. Build also has loft and stair-opening controls. **Ceiling on** reveals the overhead green joists, infill and hatch. The front and left ceiling edge beams follow the wall cutaway so they do not hide the furniture.

The bed, desk and stair landing support the existing walking simulation. The stairwell and ladder are excluded from flat-floor navigation; climbing and lower-floor rooms are not modeled. No bathroom or balcony was inferred. These dimensions and unseen details are visual estimates to refine after measuring. Switching either model and all edits remain undoable, autosaved and portable in JSON.

## Starting room and wall visibility

**My little house** is available as a starting room based on the supplied layout JSON: queen bed, gaming desk and chair, two wardrobes, bathroom fixtures, balcony bench, plants and lamp. The three earlier furniture starter cards have been removed. Existing autosaves and named layouts still load, and importing an older layout attaches its bathroom to the nearest exterior wall.

Use **Keep / hide** above the scene for each main, bathroom and interior wall. Every row offers **Keep full**, **Low wall** (64 cm), or **Hide**. The four quick choices keep only the back, left, right or front walls. Hidden walls also hide their doors/windows visually; collision and navigation continue to respect the real building. Choosing Full walls or Walls hidden overrides the display temporarily; Cutaway walls recalls the individual settings.

## Dimensions and assumptions

- Main house: 4.50 × 4.75 m, modelled as outside-face dimensions.
- Bathroom: 1.50 × 3.00 m outside the rear-left wall, running forward along the left side.
- Rear balcony: initially 4.50 × 1.00 m. It follows house width; depth is editable.
- Main walls: 3.00 m above finished floor. The editable visualization uses an approximately 3.84 m roof ridge. Bathroom has a lower extension roof. Roof geometry updates when the house footprint changes.
- Assumed wall thickness: 15 cm. Assumed floor rise above garden: 38 cm.
- Window, door and plumbing positions are approximate, adapted from the supplied reference. The left-side window moves forward to clear the bathroom extension.
- The 2 m front sliding-door assembly has a fixed right pane, leaving roughly 1 m passage through the left side when open. Navigation respects the fixed glass.
- Nominal bed widths: 3 ft, 3.5 ft, 5 ft and 6 ft. Model bed frames are slightly wider than their mattresses; inspector dimensions are the model's outside dimensions, not a furniture brand's specifications.
- Loft mattress top: about 1.88 m; platform underside about 1.53 m. The roughly 1.12 m above the mattress to a 3 m ceiling is not standing space. Confirm ceiling shape, access and safety with your designer.
- The garden is illustrative. It is not a surveyed boundary. The simulation area runs six metres either side of its origin; this is a software limit, not a land measurement.
- The lighting presets are visual, not a location/date-based solar study.

## How the fit checks work

Wall and furniture footprint overlap warnings use rotated rectangles. Rugs are non-blocking. Loft posts and the ladder are checked separately; walking below the loft is blocked when the person is too tall. The animated person uses a circular footprint about 60 cm across at 170 cm height, scaled with height. Pathfinding runs on a 10 cm grid. Taller settings may mark routes blocked in the tighter starting layouts.

These are approximate planning aids, not accessibility or building-code checks. A reachable route may still feel tight. Height fields refer to the main furniture body (for example, desktop height); monitors, taps and foliage can extend beyond it. The loft ladder projects about 43 cm in front of the frame at its default size. Desk sitting, lying down and loft climbing use simplified pose transitions; they are not biomechanical or ladder-safety simulations. The bathroom action enters the room; it does not simulate toileting. The shower is treated as a walk-in zone, not a collision-accurate glass enclosure.

This is a design visualization, not a construction or structural model. Keep your designer's confirmed measurements authoritative.

## Validation

The current automated tests and editor acceptance checks are recorded in `VALIDATION.md`. Interface tests use a renderer stub because the available preview browser cannot create a WebGL context. They verify editor state and real Three.js geometry, but the final GPU appearance needs verification in a browser with hardware acceleration. Historical V1 and V2 validation records remain below the current record.

## Optional source editing

The ready-to-use app is already built. `src/`, `build.mjs`, `package.json`, the lockfile and tests are included for future edits.

For developers only: `node build-offline.mjs` regenerates `assets/house-studio.js` directly from the included source and original licensed Three.js runtime without installing dependencies. Alternatively, run `npm ci` and `npm run build` for the regular esbuild production build. `node --test tests/structure.test.mjs` runs the dependency-free structural tests; `npm test` runs all suites after installing dependencies. The app makes no runtime network requests. The original Three.js components remain bundled under the MIT licence.
