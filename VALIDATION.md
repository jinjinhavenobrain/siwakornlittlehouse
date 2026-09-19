# V2 validation record

The V2 self-contained offline script was built and passed `node --check`. All five new core tests passed: exterior wall/floor movement; relocated front door collision geometry; relocated bathroom shell/floor; movable partitions; and structural JSON validation. The offline app was also loaded in a Chromium-based browser harness with a mock WebGL renderer: selecting Build, moving the bathroom together with contained furniture, expanding an exterior wall, adding and moving a window to another wall, changing its individual color, adding a partition, undo/redo and structural JSON persistence all passed with no JavaScript page errors.

**Verification limit:** The test harness substituted a no-op WebGL renderer. It verified scene geometry creation and editor behavior but not final GPU drawing, lighting, actual 3D pointer picking, building-code compliance, construction detailing, mobile usability, or storage on a real `file://` origin. These should be checked on the user’s PC.

---

# Historical V1 validation record — version 1.0.0

## Passed

The production bundle built successfully. All 16 automated tests passed:

1. Everyday studio: no default furniture, wall or doorway overlaps.
2. Everyday studio: all five destinations reachable at 170 cm, with sampled route segments clear of obstacles.
3. Loft workspace: no default furniture, wall or doorway overlaps (the loft headroom advisory remains intentional).
4. Loft workspace: all five destinations reachable at 170 cm, with sampled route segments clear of obstacles.
5. Flexible living: no default furniture, wall or doorway overlaps.
6. Flexible living: all five destinations reachable at 170 cm, with sampled route segments clear of obstacles.
7. Flexible layout's unfolded sofa bed: collision-free and reachable.
8. An object blocking the front doorway correctly prevents access.
9. Invalid and out-of-domain walking targets are rejected.
10. Solid walls and fixed front glass block travel; real door passages remain open for routing.
11. Rotated-coordinate conversion and oriented rectangle collision checks.
12. Layout import validation, including duplicate IDs, invalid dimensions, unknown furniture and unsafe colour values.
13. All 29 catalogue models generate finite geometry.
14. Main structure dimensions and an exactly six-mesh, 1.70 m character with a fitting navigation footprint.
15. Sofa-bed collision footprint matches scaled open geometry.
16. Offline HTML uses bundled local assets, no module loader and no duplicate element IDs.

The main source modules and final bundle also passed JavaScript syntax checks. Source requests no remote assets, APIs, analytics or fonts during normal use.

## Not verified in a browser

The internal preview service started, but browser access was blocked by the environment. No workaround or alternate browser was used. Consequently, visual appearance, GPU performance, pointer interactions, local-file storage, screenshot download and the optional browser-native agent tools have not been verified in an actual browser session.

These are limitations of the verification performed, not claims that those features passed. The packaged webpage is a first playable build for user testing.

## Suggested first check on your PC

1. Extract the ZIP and open index.html in Chrome or Edge.
2. Orbit and zoom, then switch to Front to inspect the shell and roof.
3. Try each of the three starting layouts.
4. In Decorate, add furniture, drag it, rotate it, then Undo.
5. In Simulate, check destination access, then try bed, desk, bathroom and balcony.
6. Save a named layout, export JSON, and import it again.
7. Confirm placement and assumed dimensions with the designer before relying on the model for purchases or construction.
